// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    

  // Acceder al servicio que deseas consultar
  const blog = context.app.service('blog');

  // Realizar una solicitud FIND al servicio
  const result = await blog.find();

  let myBlogs = [];

  for (let index = 0; index < result.data.length; index++) {
    const element = result.data[index];
    console.log(element.creador._id)
    if (context.id == element.creador._id) {
      myBlogs.push(element);
    }
    
  }

  // console.log(result.data);
// context.result     >>> devolvemos un array con los blogs del usuario
   context.result = myBlogs;
    

    
    return context;
  };
};
