import { useState } from "react";

const PeopleForm = () => {


    // Form fields
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [gender, setGender] = useState("");


    const [people, setPeople] = useState([]);


    const handleSubmit = (e) => {

        e.preventDefault();

        let newPerson = { name, height, favoritePet, gender };

        // let newPeople = people.push(newPerson);

        // setPeople(newPeople);

        // console.log(people);

         setPeople([...people, newPerson]);

         setName("");
         setGender("");
         setHeight("");
         setFavoritePet("");


    }

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add a Person</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Favorite Pet"
                    value={favoritePet}
                    onChange={(e) => setFavoritePet(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ marginLeft: "10px" }}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>



            {/* <ul>
                {people.map(person)=>{
                    return(
                        <li>{person}</li>
                    )
                }}
            </ul> */}


            <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {people.map((person, index) => {
                    const emoji = person.gender === "Male" ? "👨" : "👩";
                    return (
                        <li key={index}>
                            {emoji} <strong>{person.name}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
                        </li>
                    );
                })}
            </ul>
        </div>

    );
}

export default PeopleForm;
