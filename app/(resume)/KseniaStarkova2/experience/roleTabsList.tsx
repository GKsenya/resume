import { Tabs } from '@mantine/core'
import { ProjectRole } from 'types/projectRole'

const roleList = [
    ProjectRole.FRONTEND,
    ProjectRole.FULLSTACK,
    // ProjectRole.BACKEND,
]

export const RoleTabsList = () => {
    return (
        <Tabs.List my='xl' >
            {roleList.map((item) => (
                <Tabs.Tab value={item} key={item} fz='md'>
                    {item}
                </Tabs.Tab>
            ))}
        </Tabs.List>
    )
}