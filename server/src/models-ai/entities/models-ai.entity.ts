import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TokenUsageEntity} from "../../token-usage/entities/token-usage.entity";

@Entity("models")
export class ModelsAiEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({unique: true})
	name: string;

	@Column()
	tokenCostInCredit: number //стоимость 100 токенов в кредитах

	@OneToMany(() => TokenUsageEntity, (tokenUsage) => tokenUsage.model)
	tokensUsages: TokenUsageEntity[]
}
