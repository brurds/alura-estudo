export default class FotoService {

    constructor(resourse){
        this._resourse = resourse('v1/fotos{/id}');

    }
    lista(){
        return this._resourse
            .query()
            .then(res => res.json(), err =>{
                console.log(err);
                throw new Error('Não foi possivel obter as fotos');
            });

    }
    cadastra(foto){
        if(foto._id){
            return this._resourse
                .update({id: foto._id},foto);
        }else{
            return this._resourse
            .save(foto); 
        }
        

    }
    apaga(id){
        return this._resourse.delete( { id : id } )
            .then(null, err =>{
                console.log(err);
                throw new Error('Não foi possivel Deletar ');
            })

    }
    busca(id){
        return this._resourse.get({ id : id })
        .then(res => res.json());
    }
}