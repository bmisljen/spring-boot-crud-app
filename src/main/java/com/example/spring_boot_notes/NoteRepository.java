package com.example.spring_boot_notes;

import org.springframework.data.jpa.repository.JpaRepository;

// Setup the JPA interface in order to persist the note objects in the MYSQL database
public interface NoteRepository extends JpaRepository<Note, Long> {

}
