package duong_paul.duong_paul.services.impl;

import java.util.ArrayList;

import duong_paul.duong_paul.dao.UserDAO;
import duong_paul.duong_paul.models.User;
import duong_paul.duong_paul.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDAO userDAO;
	
    public ArrayList<User> getUsers() {
        return userDAO.findAll();
    }
    public User saveUser(User user){
    	return userDAO.save(user);
    }
    public void updateUser(User user){
    	userDAO.update(user);
    }
    public void deleteUserById(Integer id){
    	userDAO.deleteUserById(id);
    }
    public User findUserById(Integer id){
    	return userDAO.findUserById(id);
    }
}
