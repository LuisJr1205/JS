const Component = (function () {
    // Creamos el constructor del componente 
    const Constructor = function (options) {
        this.el=options.el;
        this.data=options.data;
        this.template=options.template;
    }

    // Agregamos los metodos al prototipo del constructor del componente
    // REnder UI

    Constructor.prototype.render = function(){
        const $element = d.querySelector(this.el);
                if(!$element) return;
                $element.innerHTML = this.template(this.data);
                console.log(this.data);
    };

    // Actualizar el STATE de forma activa
    Constructor.prototype.setState = function(obj){
        for(let key in obj){
            if(this.data.hasOwnProperty(key)){
                this.data[key] = obj[key];
            }
        }
        this.render();
    };

    // Obtenemos una copia inmutbale del state
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.data));
    };    
    
    return Constructor;

})();