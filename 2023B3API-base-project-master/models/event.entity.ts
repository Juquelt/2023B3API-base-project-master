import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('events')
export class EventEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'timestamp'})
    date: Date;

    @Column({type: 'enum', enum: ['Pending', 'Accepted', 'Declined'], default: 'Pending'})
    eventStatus: 'Pending' | 'Accepted' | 'Declined';

    @Column({type: 'enum', enum: ['RemoteWork', 'PaidLeave']})
    eventType: 'RemoteWork' | 'PaidLeave'

    @Column({type: 'text', nullable: true})
    eventDescription: string;

    @ManyToOne(() => UserEntity, (user) => user.events)
    user: UserEntity;
}

//Base for file
//class Event {
    //public id!: string; //au format uuidv4
    //public date!: Date;
    //public eventStatus?: 'Pending' | 'Accepted' | 'Declined' // valeur par défaut : 'Pending';
    //public eventType!: 'RemoteWork' | 'PaidLeave';
    //public eventDescription?: string;
    //public userId!: string; //au format uuidv4
//}