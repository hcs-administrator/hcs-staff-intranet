import { useQuery, gql } from "@apollo/client";

const STAFF = gql`
    query STAFF($id: String){
        staff(id: $id) {
            papercut_bal
        photocopierid
        }
    }
`

export default function PapercutWidget({id}) {
    const { data, loading, error } = useQuery(STAFF, {variables: {id}});
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      console.error(error);
      return null;
    }

    const staff = data.staff //.slice(0, 4);

    return (
        <div className="border-4 border-sky-900 rounded-2xl p-4 w-full">
            <h2 className="text-xl">{"Printing Details:"}</h2>
            <p className="text-lg font-bold">{`Your print balance is: $${staff.papercut_bal}`}</p>
            <p className="text-lg font-bold">{`Your photocopy number is: ${staff.photocopierid}`}</p>
        </div>
    );
  }