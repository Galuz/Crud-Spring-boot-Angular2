'use strict';
import {myService} from './myService';
import {Component} from 'angular2/core';

export class myController {
  constructor(){
    this.user={id:null,name:'',last:''};
    this.users=[];
    this.submit = submit;
    this.edit = edit;
    this.remove = remove;
    this.reset = reset;
  }

fetchAllUsers();

function fetchAllUsers(){
     myService.fetchAllUsers()
         .then(
         function(d) {
             this.users = d;
         },
         function(errResponse){
             console.error('Error while fetching Users');
         }
     );
 }

 function createUser(user){
        myService.createUser(user)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }

    function updateUser(user, id){
        myService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }

    function deleteUser(id){
        myService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    function submit() {
        if(this.user.id===null){
            createUser(self.user);
        }else{
            updateUser(self.user, self.user.id);
            console.log('User updated with id ', self.user.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < this.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(this.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteUser(id);
    }
}
