import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProjectUserEntity } from "./project-user.entity";

@Entity ('projects')
export class ProjectEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 255})
    name: string;

    @ManyToMany(() => UserEntity, (user) => user.projets)
    referringEmployee: UserEntity;

    @OneToMany(() => ProjectUserEntity, (projectUser) => projectUser.project)
    projectUsers: ProjectUserEntity[];
}

//Base for file
//class Project {
    //public id!: string; //au format uuidv4
    //public name!: string;
    //public referringEmployeeId!: string; //au format uuidv4
//}