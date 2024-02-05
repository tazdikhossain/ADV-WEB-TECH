import {Injectable} from "@nestjs/common";


@Injectable()
export class AdminService{

getUsers():object{ 
        return {message:" Hello Admin"};
}

getUsersById(id:string):object{
    return { message:"Yor id id" + id}
}

getUserNameAndId(name:string, id:string):object{
    return{ message:"My name is" + name + "Yor id id" + id};
}

addUser(myobj:object):object{
    return myobj;
}

update(myobj:object, id:string):object{
    return {...myobj, id};
}

}