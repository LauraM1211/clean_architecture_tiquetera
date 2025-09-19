export default class UpdateTiquetera {
    constructor(tiqueteraRepository){
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute (id, userData){
        return await this.tiqueteraRepository.update(id, userData);
    }
}