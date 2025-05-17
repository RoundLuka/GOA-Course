let id: string | number;

id = "id253252";

id = 1235;

type userType = {
    firstname: string,
    lastname: string,
    id: string | number;
}

type funcType = (firstname: string, lastname: string, id: string | number) => string | userType;

const createUser: funcType = function(firstname, lastname, id) {
    const user: userType = {firstname, lastname, id};
    return user
}

console.log(createUser("Luka", "Gurgenidze", 2342235))

const reValue = (isTrue: boolean) => {
    // typescript assumes that this function returns either number or userType (what createUser returns)
    // so it creates union return statement
    if(isTrue) return 10;
    return createUser("Luka", "Gurgenidze", 2342235)
}

const date = ["2025-12-4", 12353453]

