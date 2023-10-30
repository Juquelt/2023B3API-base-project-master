import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeform';
import { IsEmail, IsNotEmpty, MinLength, IsEnum } from 'class-validator';
import { EventEntity } from './event.entity';
import { ProjectUserEntity } from './project-user.entity';

@Entity('users')
@Unique(['username', 'email'])
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 100})
    @IsNotEmpty()
    username: string;

    @Column({type: 'varchar', length: 255})
    @IsEmail()
    email: string;

    @Column({type: 'text'})
    @MinLength(8)
    password: string;

    @Column({type: 'enum', enum:['Employee', 'Admin', 'ProjectManager'], default: 'Employee'})
    @IsEnum(['Employee', 'Admin', 'ProjectManager'])
    role: 'Employee' | 'Admin' | 'ProjectManager';

    @OneToMany(() => EventEntity, (event) => event.user)
    events: EventEntity[];

    @OneToMany(() => ProjectUserEntity, (projectUser) => projectUser.user)
    projectUsers: ProjectUserEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;
}

//Base for file
//class User {
    //public id!: string; //au format uuidv4
    //public username!: string; // cette propriété doit porter une contrainte d'unicité
    //public email!: string; // cette propriété doit porter une contrainte d'unicité
    //public password!: string;
    //public role!: 'Employee' | 'Admin' | 'ProjectManager' // valeur par defaut : 'Employee'
//}