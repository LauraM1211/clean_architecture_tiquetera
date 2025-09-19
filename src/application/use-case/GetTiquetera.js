export default class GetTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute() {
        return await this.tiqueteraRepository.findAll();
    }
}