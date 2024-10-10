package com.SpringBootProject.Fullstack_Backend.Repository;

import com.SpringBootProject.Fullstack_Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
