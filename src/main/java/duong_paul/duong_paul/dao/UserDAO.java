package duong_paul.duong_paul.dao;

//import java.sql.Connection;
import java.util.ArrayList;

import duong_paul.duong_paul.models.User;

public interface UserDAO {	
	public User save(User user);
	public void update(User user);
	public ArrayList<User> findAll();
	public void deleteUserById(Integer id);
	public User findUserById(Integer id);
}
