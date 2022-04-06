<div class="row">
    <!-- Formulario -->
    <div class="col s12 m6 l6 center">
        <div class="card white">

            <div class="card-content">
                <span class="card-title"><b>Añadir un pruducto</b></span>
               
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="codigo" type="number" name="codigo"  placeholder="Ingrese código del producto ">
                            <label for="name">Código</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="nombre" type="text" name="name"  placeholder="Ingrese el nombre del producto">
                            <label for="name">Nombre</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="descrip" type="text" name="descrip"  placeholder="Escriba brevemente la descripción del producto">
                            <label for="descrip">Descripción</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="precio" type="number" name="precio"  placeholder="Ingrese precio del producto">
                            <label for="type">Precio</label>
                        </div>

                       
                    </div>

             
            </div>

            <div class="card-action">
                <div class="row">
                    <div class="col s6">
                        <button  style="width: 100%;" class="btn left green darken-3 white-text">Limpiar formulario</button>
                    </div>

                    <div class="col s6">
                        <button id="addProduct" style="width: 100%;" class="btn left blue darken-3 white-text">Guardar producto</button>
                    </div>
                </div>
            </div>

        </div>
    </div>




    
  

    <!-- Tabla -->
    <div class="col s12 m6 l6">
        <div class="card white">
            <div class="card-content black-text">
                <div class="input-field" >
                    <i class="material-icons prefix">search </i>
                    <input type="text" id="searchfield" >
                    <label for="searchfield">Buscar precio</label>
                </div>
                <div class="input-field" >
                    <i class="material-icons prefix">limit </i>
                    <input type="text" id="limit" >
                    <label for="limit">Limite</label>
                </div>


                <table>
                    <thead>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Descripción </th>
                        <th>Precio</th>
                        <th>Operaciones</th>
                    </thead>
                    <tbody id="idBody" >
                       
                    </tbody>
                </table>

            </div>
        </div>
        
    </div>


    <script src="./scripts/home.js?v1.0.0"></script>
