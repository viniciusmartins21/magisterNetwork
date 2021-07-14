import { Comentario } from "./Comentario"
import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
    public id: number
    public titulo: string
    public descricao: string
    //var criadas apelas no front pra remanejamento de tipos diferentes de midia:
    public midia: string
    public foto: string
    public video: any
    
    public dataPostagem: Date
    public usuario: User
    public tema: Tema
    public comentario: Comentario[]
}