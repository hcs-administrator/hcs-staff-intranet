import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: "273690688747-j2uaqp8lv6fmivfb91ltrfuopfapu2bi.apps.googleusercontent.com",
        clientSecret: "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"
      })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && (profile.email.endsWith("@hcs.kiwi") || profile.email.endsWith("@hamiltonchristian.school.nz"))
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
}

export default NextAuth(authOptions)