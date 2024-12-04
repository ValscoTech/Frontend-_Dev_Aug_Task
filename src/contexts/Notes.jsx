import { createContext, useContext, useCallback, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
	const getNotesByUserId = useCallback(async (userId) => {
		const response = await fetch(`./data/notes.json`);
		const data = await response.json();
		const filteredNotes = data.notes.filter(
			(note) => note.ownerId === userId,
		);
		return filteredNotes;
	}, []);

	const getRentNotesByUserId = async (userId) => {
		const response = await fetch(`./data/notes.json`);
		const data = await response.json();
		const filteredNotes = data.notes.filter((note) => {
			return note.consumersId.some((id) => id === userId);
		});
		return filteredNotes;
	};

	const getNoteById = async (id) => {
		const response = await fetch(`./data/notes.json`);
		const data = await response.json();
		const filteredNotes = data.notes.filter((note) => {
			return note.id == id;
		});
		return filteredNotes;
	};

	const getAllNotesExceptOwner = async (userId) => {
		const response = await fetch(`./data/notes.json`);
		const data = await response.json();
		const filteredNotes = data.notes.filter((note) =>
			note.consumersId.some((id) => id !== userId),
		);
		return filteredNotes;
	};

	return (
		<NotesContext.Provider
			value={{
				getNotesByUserId,
				getRentNotesByUserId,
				getAllNotesExceptOwner,
				getNoteById
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

export function useNotes() {
	const context = useContext(NotesContext);
	if (context === undefined) {
		throw new Error("useNotes must be used within a NotesProvider");
	}
	return context;
}
