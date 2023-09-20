package com.admin.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginCotroller {
    @RequestMapping("/login")
    public String login() {
        return "index";
    }
}
