import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTokenUsageTable1731082581825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Создание таблицы tokensUsage
        await queryRunner.createTable(
            new Table({
                name: "tokensUsage",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "creditsUsed",
                        type: "int",
                    },
                    {
                        name: "modelId",
                        type: "int",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "userId",
                        type: "int",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey("tokensUsage", new TableForeignKey({
            columnNames: ["modelId"],
            referencedColumnNames: ["id"],
            referencedTableName: "models",
            onDelete: "RESTRICT",
        }));

        await queryRunner.createForeignKey("tokensUsage", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "RESTRICT",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("tokensUsage");
        const foreignKeyModel = table!.foreignKeys.find(fk => fk.columnNames.indexOf("modelId") !== -1);
        const foreignKeyUser = table!.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);

        if (foreignKeyModel) {
            await queryRunner.dropForeignKey("tokensUsage", foreignKeyModel);
        }

        if (foreignKeyUser) {
            await queryRunner.dropForeignKey("tokensUsage", foreignKeyUser);
        }

        await queryRunner.dropTable("tokensUsage");
    }

}
