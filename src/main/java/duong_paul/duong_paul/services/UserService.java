package duong_paul.duong_paul.services;

import java.util.ArrayList;

import duong_paul.duong_paul.models.User;

public interface UserService {
    public ArrayList<User> getUsers();
    public User saveUser(User user);
    public void updateUser(User user);
    public void deleteUserById(Integer id);
    public User findUserById(Integer id);
}
