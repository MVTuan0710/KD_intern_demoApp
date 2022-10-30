import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
@Entity()
export class BookEntity  extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column()
    bookname!: string

    @Column()
    author!: string
}

