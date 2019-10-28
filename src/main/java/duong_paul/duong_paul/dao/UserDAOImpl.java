package duong_paul.duong_paul.dao;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import duong_paul.duong_paul.models.User;

@Component
public class UserDAOImpl implements UserDAO{
	final static Logger logger = LoggerFactory.getLogger(UserDAOImpl.class);
	private Connection conn;
	public Connection getConnection() {
//		if(conn == null){
//		String dbFile = "D:/Development/interview/duong_paul/src/main/resources/application.db";
		String dbFile = "src/main/resources/application.db";
			String url = "jdbc:sqlite:"+dbFile;
			try {
				conn = DriverManager.getConnection(url);
				logger.info("Connected to Database");
			} catch (SQLException e){
				logger.info(e.getMessage());
			}	
//		}
		return conn;
	}

	@Override
	public User save(User user) {
		String sql = "INSERT INTO user (first_name, last_name, email, phone_number) "
				+ "VALUES (?,?,?,?)";
		try (Connection conn = this.getConnection(); 
				PreparedStatement pstmt = conn.prepareStatement(sql)){
			pstmt.setString(1,user.getFirstName());
			pstmt.setString(2,user.getLastName());
			pstmt.setString(3,user.getEmail());
			pstmt.setString(4,user.getPhoneNumber());
			pstmt.executeUpdate();
		} catch (SQLException e){
			System.out.println(e.getMessage());
		}
		return user;
	}
	
	@Override
	public void update(User user) {
		String sql = "UPDATE user SET "+
					"first_name=?, last_name=?, email=?, phone_number=? "+
					"WHERE id=?";
		try (Connection conn = this.getConnection(); 
				PreparedStatement pstmt = conn.prepareStatement(sql)){
			pstmt.setString(1,user.getFirstName());
			pstmt.setString(2,user.getLastName());
			pstmt.setString(3,user.getEmail());
			pstmt.setString(4,user.getPhoneNumber());
			pstmt.setInt(5,user.getId());
			pstmt.executeUpdate();
		} catch (SQLException e){
			System.out.println(e.getMessage());
		}
	}
	
	@Override
	public ArrayList<User> findAll(){
		String sql = "SELECT * FROM user";
		ArrayList<User> users = new ArrayList<User>(); 
		try (Connection conn = this.getConnection(); 
				Statement stmt = conn.createStatement()){
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()){
				Integer id = rs.getInt("id");
				String firstName = rs.getString("first_name");
				String lastName = rs.getString("last_name");
				String email = rs.getString("email");
				String phoneNumber = rs.getString("phone_number");
				User user = new User(id,firstName,lastName,email,phoneNumber);
				users.add(user);
			}
		} catch (SQLException e){
			System.out.println(e.getMessage());
		}
		return users;
	}
	
	public void deleteUserById(Integer id){
		String sql = "DELETE FROM user WHERE id=?";
		try (Connection conn = this.getConnection(); 
			PreparedStatement pstmt = conn.prepareStatement(sql)){
			pstmt.setInt(1, id);
			pstmt.executeUpdate();
		} catch (SQLException e){
			System.out.println(e);
		}
	}
	
	public User findUserById(Integer id){
		String sql = "SELECT * FROM user WHERE id=?";
		User user = null;
		try (Connection conn = this.getConnection(); 
			PreparedStatement pstmt = conn.prepareStatement(sql)){
			pstmt.setInt(1, id);
			ResultSet rs =  pstmt.executeQuery();
			while (rs.next()){
				String firstName = rs.getString("first_name");
				String lastName = rs.getString("last_name");
				String email = rs.getString("email");
				String phoneNumber = rs.getString("phone_number");
				user = new User(id,firstName,lastName,email,phoneNumber);
			}
		} catch (SQLException e){
			System.out.println(e);
		}
		return user;
	}
	
}
