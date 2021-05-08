import React, { useState } from 'react';
import Note from './Note';
import CreateArea from './CreateArea';
import Header from './Header';
import Footer from './Footer';

function App() {
	const [ notes, setNotes ] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [ ...prevNotes, newNote ];
		});
	}

	function deleteNotes(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	return (
    <div className = "parent">
			<Header />
				<CreateArea onAdd={addNote} />
				<div className = "allnotes">
        {notes.map((noteItem, index) => {
					return (
						<Note
							key={index}
							id={index}
							title={noteItem.title}
							content={noteItem.content}
							onDelete={deleteNotes}
						/>
					);
				}).reverse()}
        </div>
			{/* <Footer /> */}
    </div>
	);
}

export default App;
