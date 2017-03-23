"use strict";
app.service('communication', function(){

    let self = this;

    let userType = "s";
    self.setUserType = (type)=>{
        userType = type;
    }

    self.getUserType = ()=>{
        return userType;
    }



    });