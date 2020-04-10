package com.example.spring_boot_notes;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class NoteService {

    @Autowired
    private NoteRepository repo;

    public List<Note> listAll() {
        return repo.findAll();
    }

    public void save(Note note) {
        repo.save(note);
    }

    public Note get(long id) {
        return repo.findById(id).get();
    }

    public void delete(long id) {
        repo.deleteById(id);
    }
}
