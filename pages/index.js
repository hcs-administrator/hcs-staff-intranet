import { useState, useEffect, use } from 'react'
import { useSession, signIn } from "next-auth/react"

import ShowVerseOfTheDay from "../components/ShowVerseOfTheDay"
import PapercutWidget from "../components/PapercutWidget"
import { LinkButtonLightBlue, LinkButtonBlue, LinkButtonGreen, LinkButtonOrange, LinkButtonPurple } from "../components/LinkButton"

export default function Home() {

  const { data: session } = useSession()
  const [id, setId] = useState("")

  const [ql, setQL] = useState([]) //Quick Links
  const [gl, setGL] = useState([]) //Google Links
  const [pd, setPD] = useState([]) //Professional Development
  const [ss, setSS] = useState([]) //Support Sites
  const [yl, setYl] = useState([]) //Your Links

  useEffect(() => {

    if (session) {
      setId(session.user.email.split('@')[0].toUpperCase())

      fetch('https://hcs-intranet.jtek.lol/api/bookmarks')
      .then(res => res.json())
      .then(data => {

        let temp = data.data.map(d => ({attributes: {category: d.attributes.category, id: d.id, title: d.attributes.title, url: d.attributes.url }}))

        let ql1 = temp.filter(bm => bm.attributes.category === "QuickLinks")
        let gl1 = temp.filter(bm => bm.attributes.category === "GoogleLinks")
        let pd1 = temp.filter(bm => bm.attributes.category === "ProfessionalDevelopment")
        let ss1 = temp.filter(bm => bm.attributes.category === "SupportLinks")
        let yl1 = temp.filter(bm => bm.attributes.category === "YourLinks")

        fetch(`https://hcs-intranet.jtek.lol/api/staff-users?populate=Links&fields[0]=email&filters[email][$eq]=${session.user.email}`)
        .then(res => res.json())
        .then(data => {
  
          let base = data.data[0]


          let temp = base === undefined ? [] : base.attributes.Links.map(b => ({attributes: {category: b.category, id: b.id, title: b.title, url: b.url}}))

          setQL(ql1.concat(temp.filter(bm => bm.attributes.category === "QuickLinks")))
          setGL(gl1.concat(temp.filter(bm => bm.attributes.category === "GoogleLinks")))
          setPD(pd1.concat(temp.filter(bm => bm.attributes.category === "ProfessionalDevelopment")))
          setSS(ss1.concat(temp.filter(bm => bm.attributes.category === "SupportLinks")))
          setYl(yl1.concat(temp.filter(bm => bm.attributes.category === "YourLinks")))
        })

      })

    }

  }, [session, id])

  if (session) {
    return (
      <div className="h-full p-4 dark:bg-white dark:text-black">
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-3/4">

            <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Hello ${session.user.name}`}</h1>

            <ShowVerseOfTheDay />

            <PapercutWidget id={id} />

            {/* <div className="border-4 border-sky-900 rounded-2xl p-4 w-full">
              <h2 className="text-xl">{"Your Tickets:"}</h2>
              <p className="text-lg font-bold">{""}</p>
              <p className="text-lg font-bold">{""}</p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 col-span-1 md:col-span-3 w-full md:w-3/4 ">
              {yl.length > 0 ? <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Your Links`}</h1> : null}

              {yl.map(bm => {
                return (
                  <LinkButtonPurple key={bm.attributes.id} link={bm.attributes.url} name={bm.attributes.title} />
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 col-span-1 md:col-span-3 w-full md:w-3/4 ">
              {gl.length > 0 ? <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Google Links`}</h1> : null}

              {gl.map(bm => {

                return (
                  <LinkButtonLightBlue key={bm.attributes.id} link={bm.attributes.url} name={bm.attributes.title} />
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 col-span-1 md:col-span-3 w-full md:w-3/4 ">
              {ql.length > 0 ? <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Quick Links`}</h1> : null}

              {ql.map(bm => {

                return (
                  <LinkButtonBlue key={bm.attributes.id} link={bm.attributes.url} name={bm.attributes.title} />
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 col-span-1 md:col-span-3 w-full md:w-3/4 ">
              {pd.length > 0 ? <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Professional Development`}</h1> : null}

              {pd.map(bm => {
                return (
                  <LinkButtonGreen key={bm.attributes.id} link={bm.attributes.url} name={bm.attributes.title} />
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 col-span-1 md:col-span-3 w-full md:w-3/4 ">
              {ss.length > 0 ? <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Support Sites`}</h1> : null} 

              {ss.map(bm => {
                return (
                  <LinkButtonOrange key={bm.attributes.id} link={bm.attributes.url} name={bm.attributes.title} />
                )
              })}
            </div>

          </div>

      </div>
    )
  } else {
    return (
      <div className="h-screen p-4 dark:bg-white dark:text-black">

        <div className="pb-6">
          <h2 className="text-2xl">You have reached the HCS Staff Intranet Site</h2>
          <p className="mb-4">You will need to sign in with your school google account to see your content.</p>
        </div>

        <button className="bg-sky-700 p-4 text-white w-full md:w-1/3 rounded-xl border-4 border-hcs-blue" onClick={() => signIn('google')}>
            <p className="text-xl">Sign In</p>
        </button>
      </div>
    )
  }

}
