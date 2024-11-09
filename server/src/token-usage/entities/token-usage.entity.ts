import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ModelsAiEntity} from "../../models-ai/entities/models-ai.entity";
import {UserEntity} from "../../user/entities/user.entity";

@Entity("tokensUsage")
export class TokenUsageEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	creditsUsed: number

	@Column()
	modelId: number;

	@Column()
	message: string

	@Column()
	userId: number;

	@ManyToOne(() => ModelsAiEntity, (model) => model.tokensUsages, {onDelete: "RESTRICT"})
	model: ModelsAiEntity;

	@ManyToOne(() => UserEntity, (user) => user.tokensUsages, {onDelete: "RESTRICT"})
	user: UserEntity;
}
