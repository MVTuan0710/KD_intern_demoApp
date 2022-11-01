import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
@Entity()
export class AccountEntity  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    phone!: number

    @Column()
    address!: string
}

