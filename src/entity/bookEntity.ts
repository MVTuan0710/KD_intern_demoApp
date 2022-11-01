import { create } from "domain";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
@Entity()
export class BookEntity  extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number; 

    @Column()
    bookname?: string

    @Column()
    author?: string

    @CreateDateColumn()
    create_at?: Date

    @UpdateDateColumn()
    update_at?: Date

    @DeleteDateColumn()
    delete_at?: Date

}

