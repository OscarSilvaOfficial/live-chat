import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Generic extends BaseEntity {

    constructor(name?: string ) {
        super();
        this.name = name ? name : ''
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

}
