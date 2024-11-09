import {Factory, Seeder} from "typeorm-seeding";
import {ModelsAiEntity} from "../../models-ai/entities/models-ai.entity";

export default class CreateModel implements Seeder {
	public async run(factory: Factory): Promise<any> {
		await factory(ModelsAiEntity)().create({name: "gpt-4", tokenCostInCredit: 20});
		await factory(ModelsAiEntity)().create({name: "gpt-3.5", tokenCostInCredit: 10});
	}
}