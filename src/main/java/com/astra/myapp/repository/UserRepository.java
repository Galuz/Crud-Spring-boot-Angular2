package com.astra.myapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.astra.myapp.model.*;

public interface UserRepository extends CrudRepository<User, Integer> {

}
