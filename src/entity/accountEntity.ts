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
    phone!: string

    @Column()
    address!: string

    @Column()
    is_active!: boolean

    @Column()
    verify_token!: string
}

