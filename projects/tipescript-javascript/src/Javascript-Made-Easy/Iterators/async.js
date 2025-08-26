function getById(id) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`Processing the request by ${id}`);
            resolve(id);
        }, 2000);
    })
};



(async function getUsers() {
    const userIds = [1325,4623,5436];
    for(const id of userIds){
        await getById(id);
    };
})();


(async function getUsersForEach() {
    const userIds = [1325,4623,5436];
    userIds.forEach(async (id) => {
        await getById(id);
    });
})();



