import { Postagem } from './Postagem';
import { User } from './User';

export class Comentario{
    public comentario: string
    public id: number
    public data: Date
    public postagem: Postagem
    public usuario: User
}