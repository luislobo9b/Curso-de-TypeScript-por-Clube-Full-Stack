console.log('aula 07');

enum UserType {
    Admin = 1,
    Editor = 2,
    User = 3
}

function checkUserType(type: number){
    switch(type){
        case UserType.Admin:
            console.log('admin');
            break;
        case UserType.Editor:
            console.log('editor');
            break;
        case UserType.User:
            console.log('user');
            break;
    };
};