package duong_paul.duong_paul.controllers;

import java.util.ArrayList;

import duong_paul.duong_paul.models.User;
import duong_paul.duong_paul.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService service;

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<User> getUsers() {
        return service.getUsers();
    }
    @CrossOrigin
    @RequestMapping(value="/get-user", method = RequestMethod.GET)
    @ResponseBody
    public User findUserById(@RequestParam(name="id") Integer id) {    	
		return service.findUserById(id);
    }
    
    @CrossOrigin
    @RequestMapping(value="/save-user", method = RequestMethod.POST)
    @ResponseBody
    public User saveUser(@RequestBody User user) {
    	try{
    		service.saveUser(user);    		
    	} catch (Exception e){
    		System.out.println(e.getMessage());
    	}
        return user;
    }

    @CrossOrigin
    @RequestMapping(value="/delete-user", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteUser(@RequestParam(name="id") Integer id) {
    	System.out.println(id);
        service.deleteUserById(id);
        return "User deleted";
    }
    
    @CrossOrigin
    @RequestMapping(value="/update-user", method = RequestMethod.PUT)
    @ResponseBody
    public String updateUser(@RequestBody User user) {
    	try{
    		service.updateUser(user);    		
    	} catch (Exception e){
    		System.out.println(e.getMessage());
    	}
        return "User Updated";
    }
}
