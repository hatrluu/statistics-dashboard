package duong_paul.duong_paul;

import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import duong_paul.duong_paul.dao.UserDAO;
import duong_paul.duong_paul.models.User;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DuongPaulApplicationTests {
	Integer newUserId = 0;
	
	@Autowired
	UserDAO userDAO;

	@Test
	public void contextLoads() {
	}
	
	@Test
	public void saveUser() {
		ArrayList<User> users = userDAO.findAll();
		userDAO.save(new User(null, "Test", "User", "test.user@email.com", "1234567890"));
		ArrayList<User> updatedUsers = userDAO.findAll();
		assertEquals(1, updatedUsers.size()-users.size());
	}

	@Test
	public void editUser() {
		ArrayList<User> users = userDAO.findAll();
		userDAO.update(new User(users.get(users.size()-1).getId(), "Test", "Edit", "test.user@email.com", "1234567890"));
		ArrayList<User> updatedUsers = userDAO.findAll();
		assertEquals("Edit", updatedUsers.get(updatedUsers.size()-1).getLastName());
	}

	@Test
	public void deleteUser() {
		ArrayList<User> users = userDAO.findAll();
		userDAO.deleteUserById(users.get(users.size()-1).getId());
		ArrayList<User> updatedUsers = userDAO.findAll();
		assertEquals(1, users.size()-updatedUsers.size());
	}
}
