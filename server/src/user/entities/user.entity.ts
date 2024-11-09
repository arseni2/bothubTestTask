import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RoleEntity} from "../../role/entities/role.entity";
import {TokenUsageEntity} from "../../token-usage/entities/token-usage.entity";

@Entity("users")
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({default: 50})
	balance: number

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column()
	roleId: number;

	@ManyToOne(() => RoleEntity, (role) => role.user, {onDelete: "RESTRICT"})
	role: RoleEntity;

	@OneToMany(() => TokenUsageEntity, (tokenUsage) => tokenUsage.user)
	tokensUsages: TokenUsageEntity[]
}
