import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
      })
  ],
  secret: "fddklsajfkjasjfl",
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return (
          //Won't check against blanket @hamiltonchristian.school.nz because then students have access to this
          profile.email_verified && 
            ( profile.email.endsWith("@hcs.kiwi") || 
              profile.email("principal@hamiltonchristian.school.nz") ||
              profile.email("super_admin@hamiltonchristian.school.nz")
            )
          )
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
}

export default NextAuth(authOptions)