import {define} from 'typeorm-seeding';
import {ModelsAiEntity} from "../../models-ai/entities/models-ai.entity";

define(ModelsAiEntity, () => {
	const model = new ModelsAiEntity();
	return model;
});
