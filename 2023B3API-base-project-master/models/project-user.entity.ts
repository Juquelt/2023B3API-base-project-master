import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProjectEntity } from "./project.entity";

@Entity('project_users')
export class ProjectUserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'date'})
    startDate: Date;

    @Column({type: 'date'})
    endStart: Date;

    @ManyToOne(() => ProjectEntity, (project) => project.projectUsers)
    project: ProjectEntity;

    @ManyToOne(() => UserEntity, (user) => user.projectUsers)
    user: UserEntity;
}

//Base for file
//class ProjectUser {
    //public id!: string; //au format uuidv4
    //public startDate!: Date;
    //public endDate!: Date;
    //public projectId!: string; //au format uuidv4
    //public userId!: string; //au format uuidv4
//}