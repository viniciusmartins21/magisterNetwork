import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
    public id: number
    public titulo: string
    public descricao: string
    public midia: string
    public dataPostagem: Date
    public usuario: User
    public tema: Tema
}