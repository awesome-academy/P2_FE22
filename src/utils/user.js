export const isExist = (arr, email, password) => {
    return arr.findIndex(item => {
        return (
            item.Email == email && item.Password == password
            );
    })
}