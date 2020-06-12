console.log('Aliens');

const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Aprendiendo Vue',
        tareas: [],
        nuevaTarea: ''

    },

    methods:{
        agregarTarea: function(){
            //console.log('clicked !!! ', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            });
            console.log(this.tareas);

            this.nuevaTarea = '';
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            //console.log('clicked !!! ', index);
            this.tareas[index].estado = true;
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('crud-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
});
