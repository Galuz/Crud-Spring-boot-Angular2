package com.astra.myapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.astra.myapp.repository.*;
import com.astra.myapp.model.*;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>();
		userRepository.findAll()
		.forEach(users::add);
		return users;
	}
	
	public User getUser(int id) {
		return userRepository.findOne(id);
	}
	
	public void addUser(User user) {
		userRepository.save(user);
	}
	
	public void updateUser(int id, User user) {
		userRepository.save(user);
	}
	
	public void deleteUser(int id) {
		userRepository.delete(id);
	}
}
