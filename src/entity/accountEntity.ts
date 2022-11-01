import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,  CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm"
@Entity()
export class AccountEntity  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: string

    @Column()
    email?: string

    @Column()
    password?: string

    @Column()
    phone?: number

    @Column()
    address?: string

    @CreateDateColumn()
    create_at?: Date

    @UpdateDateColumn()
    update_at?: Date

    @DeleteDateColumn()
    delete_at?: Date
}

