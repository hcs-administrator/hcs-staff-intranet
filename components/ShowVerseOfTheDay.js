import { useQuery, gql } from "@apollo/client";

const VERSE = gql`
    query VERSE($passage: String) {
    showVerse(passage: $passage) {
        passages
        query
    }
    }
`

export default function ShowVerseOfTheDay() {
    const { data, loading, error } = useQuery(VERSE, {variables: {passage: "Micah 6:8"}});
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      console.error(error);
      return null;
    }

    const showverse = data.showVerse //.slice(0, 4);

    return (
        <div className="border-4 border-sky-900 rounded-2xl p-4 w-full">
            <h2 className="text-xl">{"Today's Memory Verse:"}</h2>
            {showverse.passage ? 
                <p>{showverse.passages.replace(/\n/g, "<br />")}</p> : 
                <p>{showverse.passages}</p>}
        </div>
    );
  }